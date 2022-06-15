// select the outer div container
const tabs = document.querySelector('.tabs');
// select the tab buttons
const tabButtons = tabs.querySelectorAll('[role="tab"]');
// select the tab panels divs
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(eve) {
  // hide all tabPanels
  // console.log(tabPanels); // node list with 3 DOM elements
  tabPanels.forEach(panel => {
    // console.log(panel); // single HTML element
    panel.hidden = true;
  });

  // mark all tabButtons as unselected
  tabButtons.forEach(tabButton => {
    tabButton.setAttribute('aria-selected', false);
  });

  // mark the clicked tabButton as selected
  eve.currentTarget.setAttribute('aria-selected', true);

  // find the associated tabPanels to tabButtons and show it
  // method 1
  /* const id = eve.currentTarget.id;
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false; */

  // find the associated tabPanels (in the array of tabPanels) to tabButtons and show it
  // method 2
  const id = eve.currentTarget.id;
  const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
