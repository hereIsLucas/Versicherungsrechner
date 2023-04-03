import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>

        <TabPanel>
          <h2>Tab 1 Content</h2>
          <p>This is the content of tab 1.</p>
        </TabPanel>
        <TabPanel>
          <h2>Tab 2 Content</h2>
          <p>This is the content of tab 2.</p>
        </TabPanel>
        <TabPanel>
          <h2>Tab 3 Content</h2>
          <p>This is the content of tab 3.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
