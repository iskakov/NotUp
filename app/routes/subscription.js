import Route from '@ember/routing/route';

export default class SubscriptionRoute extends Route {
   init() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let res = fetch('https://www.gicmoc.ru/subscription/?id=ff', {
      mode: "cors",
      headers:{
        "Access-Control-Allow-Origin": "*"
      }
    });
   res.then((res1) => {console.log(res1); let f =  res1.text(); f.then((res) => {console.log(res)})}).catch((mes) => {console.log(mes)});

  }
}
