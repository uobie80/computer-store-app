compare_membership = async () => {
    const response = await fetch('/dashboard/c_membership');
    var datalst = await response.json();
        datalst = JSON.parse(datalst);
     
    var data = [{
        values: datalst.results,
        labels: ['Premium users', 'Free users'],
        type: 'pie'
      }];
  
    const layout = {
      title: 'Memberships',
      height: 300,
      width: 400
    };

    var config = {responsive: true}

  
    Plotly.newPlot('pie-chart-01', data, layout, config);
  };

 customers_by_state = async () => {
    const response = await fetch('/dashboard/c_state');
    var datalst = await response.json();
        datalst = JSON.parse(datalst);
     
    var data = [{
        values: datalst.results,
        labels: [ "New York", "Texas", "New Jersey", "California", "Illinois", "Georgia" ],
        type: 'pie'
      }];
  
    const layout = {
      title: 'Customers By State',
      height: 300,
      width: 400
    };

  
    Plotly.newPlot('pie-chart-02', data, layout);
  };

  subscription_customers = async () => {
    const response = await fetch('/dashboard/c_subscription');
    var datalst = await response.json();
        datalst = JSON.parse(datalst);
     
    var data = [{
        values: datalst.results,
        labels: ['Subscription Users', 'Non-Subscription Users'],
        type: 'pie'
      }];
  
    const layout = {
      title: 'Subscriptions',
      height: 300,
      width: 400
    };

  
    Plotly.newPlot('pie-chart-03', data, layout);
  };


  inventory_by_brand = async () => {
    const response = await fetch('/dashboard/ivnt_by_brand');
    var datalst = await response.json();
      //  datalst = Object.values(JSON.parse(datalst));
      //  datalst = datalst[0];

       // console.log(Object.values(datalst[0]));
       datalst = JSON.parse(datalst);

       console.log(datalst.results);
     
        var data = [
          {
            x: ['MacBook Pro', 'Dell', 'Lenovo ThinkPad', 'Acer', 'HP'],
            y: datalst.results,
            type: 'bar'
          }
        ];
  
    const layout = {
      title: 'Brand Inventory',
      height: 300,
      width: 400
    };

  
    Plotly.newPlot('bar-chart-01', data, layout);
  };

  compare_membership();
  customers_by_state();
  subscription_customers();
  inventory_by_brand();