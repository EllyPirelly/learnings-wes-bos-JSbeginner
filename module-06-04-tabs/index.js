const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(eve) {
    // hide all tab panels
    // console.log(tabPanels); // node list with 3 (dom) elements
    tabPanels.forEach(panel => {
        // console.log(panel); // single html element
        panel.hidden = true;
    });

    // mark all tabs as unselected
    tabButtons.forEach(tabButton => {
        // tabButton.ariaSelected = false; // won't work
        tabButton.setAttribute('aria-selected', false); // works
    });

    // mark the clicked tab as selected
    eve.currentTarget.setAttribute('aria-selected', true);

    // find the associated tabPanel and show it - method 1
    /* const id = eve.currentTarget.id;
    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false; */

    // find the associated tabPanel and show it - method 2
    const id = eve.currentTarget.id;
    const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
    tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
