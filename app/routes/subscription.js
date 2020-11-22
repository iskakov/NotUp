import Route from '@ember/routing/route';

export default class SubscriptionRoute extends Route {
  async init() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let res = await fetch(proxyurl + 'https://gicmoc.ru/subscription?id=ff', {
      headers: {
        "Content-type": "application/json",
      }
    });
    (res.text().then((res1) => {
      console.log(typeof res1)
    }));
  }
}
