import { useEffect, useState } from 'react'
import logo from "@src/assets/images/logo/image1.png";

const   Reportpdf=({pdfTable,headerData,totalData,approvedStatus})=>{
  const [centeredModal, setCenteredModal] = useState(false)

    return(
      <>
  <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />

  <p className="c12 c20">
    <span className="c13">`</span>
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
        margin: "0px 0px",
        border: "0px solid #000000",
        transform: "rotate(0rad) translateZ(0px)",
        WebkitTransform: "rotate(0rad) translateZ(0px)",
        width: "275.5px",
        height: "73.99px"
      }}
    >
      <img
        alt=""
        src={logo}
        style={{
          width: "275.5px",
          height: "73.99px",
          marginLeft: 0,
          marginTop: 0,
          transform: "rotate(0rad) translateZ(0px)",
          WebkitTransform: "rotate(0rad) translateZ(0px)"
        }}
        title=""
      />
    </span>
  </p>
  <p className="c12 c15">
    <span className="c14 c16">Defective Inspection Report</span>
  </p>
  <p className="c8">
    <span className="c5" />
  </p>
  <a id="t.32e0f584d93b85e6a0218685a51a38ac11a70a3d" />
  <a id="t.0" />
  <table className="c18">
    <tbody>
      <tr className="c2">
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c5">CUSTOMER CODE</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c5">REGION</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c5">INSPECTION DATE</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c5">BUSINESS UNIT</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c5">DATE OF LAST INSPECTION</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c5">CLAIM NO.</span>
          </p>
        </td>
      </tr>
      <tr className="c2">
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c5">{headerData?.customerCode}</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c5">{headerData?.region}</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c5">{new Date(headerData?.inspectionDate).toDateString()}</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c5">LIGHTING</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c5">{new Date(headerData?.inspectionEndDate).toDateString()}</span>
          </p>
        </td>
        <td className="c7" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c5">{headerData?.reportId}</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p className="c8">
    <span className="c5" />
  </p>
  <a id="t.ed4eaea77513659b3fa37081bba06d7becaf66cc" />
  <a id="t.1" />
  <table className="c18">
    <tbody>
      <tr className="c2">
        <td className="c24" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c5">CUSTOMER ADDRESS</span>
          </p>
          <p className="c11">
            <span className="c5">{headerData?.partnerData?.city}, </span>
          </p>
          <p className="c11">
            <span className="c5">{headerData?.partnerData?.pincode}, </span>
          </p>
          <p className="c11">
            <span className="c5">CITY, STATE</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p className="c8">
    <span className="c4" />
  </p>
  <a id="t.f74da8eaa6951b065420961097e1ae4db2d312f8" />
  <a id="t.2" />
  <table className="c18">
    <tbody>
      <tr className="c22">
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c4">
              PRODUCT
              CODE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c4">
              DESCRIPTION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c4">OFFERED QUANTITY</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c4">OUT OF WARRANTY</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c4">APPROVED QUANTITY</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">ALREADY SCANNED</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">Fake</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c12">
            <span className="c4">REMARKS</span>
          </p>
        </td>
      </tr>
     
     
      {pdfTable.length&&pdfTable.map(a=>{
        return(
          <tr className="c2">
          <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{a.itemCode}</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{a.description}</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{a.unit}</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{a.summary.out_of_warenty===null?0:a.summary.out_of_warenty}</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{a.summary.item_in_warenty===null?0:a.summary.item_in_warenty}</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{a.summary.warrenty_already_claimed===null?0:a.summary.warrenty_already_claimed}</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{a.summary.fake===null?0:a.summary.fake}</span>
          </p>
        </td>
        <td className="c0" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">Accepted</span>
          </p>
        </td>
              </tr>
        )
      })}
       
       

      
    </tbody>
  </table>
  <p className="c8 c20">
    <span className="c13" />
  </p>
  <a id="t.5ad166e391304b6922ce2e6231dd9f006feeaf64" />
  <a id="t.3" />
  <table className="c18">
    <tbody>
      <tr className="c2">
        <td className="c25" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">TOTAL</span>
          </p>
        </td>
        <td className="c23" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4"></span>
          </p>
        </td>  
        <td className="c23" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4"></span>
          </p>
        </td>
        <td className="c23" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4"></span>
          </p>
        </td>
        <td className="c21" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{totalData.outOfWarrantySum}</span>
          </p>
        </td>
        <td className="c3" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{totalData.itemInWarrantySum}</span>
          </p>
        </td>
        <td className="c19" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{totalData.warrantyClaimedSum}</span>
          </p>
        </td>
        <td className="c19" colSpan={1} rowSpan={1}>
          <p className="c6">
            <span className="c4">{totalData.fakeSum}</span>
          </p>
        </td>
        <td className="c3" colSpan={1} rowSpan={1}>
          <p className="c1">
            <span className="c4" />
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p className="c8">
    <span className="c4" />
  </p>
  <p className="c12">
    <span className="c4">APPROVED BY:</span>
  </p>
  <ol className="c17 lst-kix_3yt7fhnqmixt-0 start" start={1}>
    <li className="c9 li-bullet-0">
      <span className="c4">
        CUSTOMER NAME-
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{headerData?.partnerData?.partnerName}
      </span>
    </li>
    <li className="c9 li-bullet-0">
      <span className="c4">
        SERVICE
        TECHNICIAN-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{approvedStatus?.serviceTechnician?.assignedTo.name}
      </span>
    </li>
    <li className="c9 li-bullet-0">
      <span className="c14">
        MANAGER-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{approvedStatus?.manager?.assignedTo.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </li>
  </ol>
</>

      

    )
}
 export default  Reportpdf