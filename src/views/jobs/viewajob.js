import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { Card, CardHeader, CardTitle, Spinner } from "reactstrap";

const viewajob = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [jobcsv, setJobcsv] = useState([]);
  const [remaining, setRemaining] = useState(0);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [NoCall, setNoCall] = useState(false);

  const configs = {
    headers: { Authorization: `Bearer ${localStorage.getItem("tokens")}` },
  };

  const groupByKey = (list, key) =>
    list.reduce(
      (hash, obj) => ({
        ...hash,
        [obj[key]]: (hash[obj[key]] || []).concat([obj.uniqueCode]),
      }),
      {}
    );

  useEffect(() => {
    let generated = props.match.params.total;
    generated = parseInt(Number(generated) / 100000) + 1;
    setTotal(generated);

    async function fetchData() {
      if (NoCall) return;
      setIsLoading(true);

      const response = await axios.get(
        ` https://warranty.lsin.panasonic.com/api/job/${props.match.params.jobId}/raw?page=${page}`,
        configs
      );
      if (isLoading) return;
      if (response.data.msg.length === 0) {
        setNoCall(true);
        return;
      } // setData[data];
      setIsLoading(false);
      setRemaining(remaining + 1);
      var modstring = response.data.msg.map((a) => {
        return {
          ItemCode: a.ItemCode,
          uniqueCode: [`https://pns.fyi/` + a.uniqueCode],
        };
      });
      var modifiedData= groupByKey(modstring,"ItemCode")
      jobcsv.push(modifiedData)
      console.log(modifiedData,'modiefieddata')
      data.push(modstring);
      setPage(page + 1);
    }

    fetchData();
  }, [page]);
  let result= [];
  if(jobcsv.length)
     jobcsv.map((item, i) => 
      Object.keys(item).forEach(key=> {
        console.log(key)
        result.push(<div className="csvdownload">
          <CSVLink
            data={item[key]}
            filename={`${key}_${i + 1}`}
          >
            {`Download_ ${key}_${i + 1}`}{" "}
          </CSVLink>
        </div>)
      }
))
        
    
    
    


  return (
    <div>
      <Card style={{ padding: "28px", minHeight: "700px" }}>
        <CardHeader>
          {!NoCall ? (
            <CardTitle style={{ textAlign: "center", width: "100%" }} tag="h4">
              {" "}
              `Files are being downloaded. Please be patient... {remaining} /
              {total} total files downloaded.{" "}
            </CardTitle>
          ) : (
            <CardTitle style={{ textAlign: "center", width: "100%" }} tag="h3">
              Download Complete
            </CardTitle>
          )}
        </CardHeader>
        <div style={{ textAlign: "center", padding: "20px" }}>
          {!NoCall ? <Spinner /> : null}
        </div>

        {data.length ? (
          <h5 style={{ textAlign: "center", width: "100%", padding: "10px" }}>
            Click on below link to download the files
          </h5>
        ) : null}
        {result}
      </Card>
    </div>
  );
};

export default viewajob;
