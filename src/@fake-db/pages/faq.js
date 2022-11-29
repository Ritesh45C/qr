import mock from '../mock'
const data = {
  faqData: {
    // payment
    payment: {
      icon: 'CreditCard',
      title: 'Payment',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'How is XPcover different from other insurance marketplaces?',
          ans: "We, at XPcover, aspire to be your one-stop-shop, your go to place ever for anything related to insurance. This means: We tie up with all major insurers and let you compare, all in one place. So, you do not have to visit other websites or speak to other insurance companies. Its all here, under one website.We remove all the jargons from the policy details and explain everything in plain English. Our experts keep it simple. They really give advice, and not enforce a certain insurer to you.But don't just blindly believe what we are saying. We have a 72% customer retention rate, which is the by far one of the best in the market. We are also the highest rated insurance website on Facebook and Google+. :)"
        },
        {
          question: 'Is it cheaper to buy insurance through XPcover.com?',
          ans: "XPcover is a licensed broker. Which means we are paid a commission for each insurance policy we sell, by the insurance companies. Does that mean you pay anything extra, other than your insurance policy premium? Nope. The commission is paid for by the insurer and not by you, the customer.Does the commission make us biased for or against any insurance company? The answer is simply no, we cannot be biased as a broker. A broker is a customer's representative and is always for the customer and not for the insurance company."
        },
        {
          question: 'What does non-exclusive mean?',
          ans: "XPcover is a licensed broker. Which means we are paid a commission for each insurance policy we sell, by the insurance companies. Does that mean you pay anything extra, other than your insurance policy premium? Nope. The commission is paid for by the insurer and not by you, the customer.Does the commission make us biased for or against any insurance company? The answer is simply no, we cannot be biased as a broker. A broker is a customer's representative and is always for the customer and not for the insurance company."
        },
        {
          question: 'Is the Regular License the same thing as an editorial license?',
          ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
        },
        {
          question: 'Which license do I need for an end product that is only accessible to paying users?',
          ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          question: 'Which license do I need to use an item in a commercial?',
          ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.'
        },
        {
          question: 'Can I re-distribute an item? What about under an Extended License?',
          ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
        }
      ]
    },
    // delivery
    delivery: {
      icon: 'ShoppingBag',
      title: 'Delivery',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Where has my order reached?',
          ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
        },
        {
          question:
            'The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?',
          ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
        },
        {
          question: 'What if my shipment is marked as lost?',
          ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
        },
        {
          question: 'My shipment status shows that it’s out for delivery. By when will I receive it?',
          ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
        },
        {
          question: 'What do I need to do to get the shipment delivered within a specific timeframe?',
          ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    // cancellation and return
    cancellationReturn: {
      icon: 'RefreshCw',
      title: 'Cancellation & Return',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Can my security guard or neighbour receive my shipment if I am not available?',
          ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
        },
        {
          question: 'How can I get the contact number of my delivery agent?',
          ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
        },
        {
          question: 'How can I cancel my shipment?',
          ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
        },
        {
          question: 'I have received a defective/damaged product. What do I do?',
          ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
        },
        {
          question: 'How do I change my delivery address?',
          ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          question: 'What documents do I need to carry for self-collection of my shipment?',
          ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et.'
        },
        {
          question: 'What are the timings for self-collecting shipments from the Delhivery Branch?',
          ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
        }
      ]
    },
    // my orders
    myOrders: {
      icon: 'Package',
      title: 'My Orders',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'Can I avail of an open delivery?',
          ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
        },
        {
          question: 'I haven’t received the refund of my returned shipment. What do I do?',
          ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
        },
        {
          question: 'How can I ship my order to an international location?',
          ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
        },
        {
          question: 'I missed the delivery of my order today. What should I do?',
          ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
        },
        {
          question: 'The delivery of my order is delayed. What should I do?',
          ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
      ]
    },
    // product and services
    productServices: {
      icon: 'Settings',
      title: 'Product & Services',
      subtitle: 'Which license do I need?',
      qandA: [
        {
          question: 'How can I register a complaint against the courier executive who came to deliver my order?',
          ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
        },
        {
          question: 'The status for my shipment shows as ‘not picked up’. What do I do?',
          ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
        },
        {
          question: 'How can I get a proof of delivery for my shipment?',
          ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
        },
        {
          question: 'How can I avail your services?',
          ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
        }
      ]
    }
  }
}

mock.onGet('/faq/data').reply(config => {
  const { q = '' } = config.params
  const queryLowered = q.toLowerCase()

  const filteredData = {}

  Object.entries(data.faqData).forEach(entry => {
    const [categoryName, categoryObj] = entry
    const filteredQAndAOfCategory = categoryObj.qandA.filter(qAndAObj => {
      return qAndAObj.question.toLowerCase().includes(queryLowered)
    })
    filteredData[categoryName] = {
      ...categoryObj,
      qandA: filteredQAndAOfCategory.length ? filteredQAndAOfCategory : []
    }
  })

  return [200, filteredData]
})
