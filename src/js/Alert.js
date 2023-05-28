//The purpose of this file is to quickly 
//add an informative alert to the product listing page to make announcements.
//A class called Alert is created and exported as a module

/*Your class should read the contents of the alerts.js file, 
and if it finds anything it should create a <section class="alert-list> element
 then  loop through the results and build a <p> for each alert and apply
  the background and foreground colors to it specified in the alert. 
  Once built the <section> should be prepended to the main element on the index page.*/


class Alert {
  constructor(alerts) {
    this.alerts = alerts;
  }

  createAlertElement() {
    const alertList = document.createElement('section');
    alertList.className = "alert-list";

    this.alerts.forEach(alert => {
      const alertElement = document.createElement('p');
      alertElement.textContent = alert.message;
      alertElement.style.backgroundColor = alert.background;
      alertElement.style.color = alert.color;
      alertList.appendChild(alertElement);
    });

    return alertList;
  }

  attachAlerts(parentElement) {
    const alertElement = this.createAlertElement();
    parentElement.appendChild(alertElement);
  }
}

export default Alert;




