import React, { Suspense } from "react";
import { TabContent, TabPane, Col, Spinner } from "reactstrap";
import Setting from "../../Pages/Profile/underPages/Setting/Setting";
import Dictionary from "../../Pages/Profile/underPages/Dictionary/Dictionary";
import Results from "../../Pages/Profile/underPages/Results/Results";
import AllTest from "../../Pages/Profile/underPages/All-test/All-test";
import Administration from "../../Pages/Profile/underPages/Administration/Administration";
import CreateTest from "../../Pages/Profile/underPages/Create-test/Cteate-test";

const TabsContent: React.FC<{path: string}> = ({path}) => {
  return (
    <TabContent activeTab={path}>
      {
        path.includes("/profile/setting") && (
        <TabPane tabId="/profile/setting">
          <Col>
            <Suspense fallback={<Spinner />}>
              <Setting />
            </Suspense>
          </Col>
        </TabPane>
        )
      }
      {
        path.includes("/profile/dictionary") && (
        <TabPane tabId="/profile/dictionary">
          <Col ls={12}>
            <Suspense fallback={<Spinner />}>
              <Dictionary />
            </Suspense>
          </Col>
        </TabPane>
        )
      }
      {
      path.includes("/profile/results") && (
        <TabPane tabId="/profile/results">
          <Col ls={12}>
            <Suspense fallback={<Spinner />}>
              <Results />
            </Suspense>
          </Col>
        </TabPane>
        )
      }
      {
      path.includes("/profile/all tests") && 
        <TabPane tabId="/profile/all tests">
          <Col ls={12}>
            <Suspense fallback={<Spinner />}>
              <AllTest />
            </Suspense>
          </Col>
        </TabPane>
      }
      {
        path.includes("/profile/create test") && (
          <TabPane tabId="/profile/create test">
            <Col ls={12}>
              <Suspense fallback={<Spinner />}>
                <CreateTest />
              </Suspense>
            </Col>
          </TabPane>
        )
      }
      {
        path.includes("/profile/administration") && (
          <TabPane tabId="/profile/administration">
            <Col ls={12}>
              <Suspense fallback={<Spinner />}>
                <Administration />
              </Suspense>
            </Col>
          </TabPane>
        )
      }
  </TabContent>
  )
};

export default TabsContent;


