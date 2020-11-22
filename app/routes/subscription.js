import Route from '@ember/routing/route';

export default class SubscriptionRoute extends Route {
  async init() {
    res = await fetch('https://gicmoc.ru/subscription?id=ff', {
      headers: 
      {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Credentials':'true'  
      },
    });
    alert(res);
  }
}
