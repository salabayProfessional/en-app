import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Button, CogIcon, ManualIcon, HomeIcon, ResolveIcon, EditIcon, ListIcon } from "evergreen-ui";
import classnames from 'classnames';
import { useHistory, useLocation } from 'react-router';
import './Tabs.scss';
import TabsContent from './TabsContent';

const Tabs: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const list = (
    <Nav tabs className="tabs">
        <NavItem>
        <Button marginY={8} marginRight={12} iconAfter={CogIcon}
            className={classnames({ active: location.pathname === "/profile/setting" })}
            onClick={() => { 
              history.push("/profile/setting");
            }}
          >
            <span>setting</span>
          </Button>
        </NavItem>
        <NavItem>
          <Button marginY={8} marginRight={12} iconAfter={ManualIcon}
            className={classnames({ active: location.pathname === "/profile/dictionary" })}
            onClick={() => { 
              history.push("/profile/dictionary");
            }}
          >
            <span>dictionary</span>
          </Button>
        </NavItem>
        <NavItem>
          <Button marginY={8} marginRight={12} iconAfter={ListIcon}
            className={classnames({ active: location.pathname === "/profile/results" })}
            onClick={() => {
              history.push("/profile/results");
            }}
          >
            <span>results</span>
          </Button>
        </NavItem>
        <NavItem>
          <Button marginY={8} marginRight={12} iconAfter={ResolveIcon}
            className={classnames({ active: location.pathname === "/profile/all tests" })}
            onClick={() => { 
              history.push("/profile/all tests");
            }}
          >
            <span>all tests</span>
          </Button>
        </NavItem>
        <NavItem>
          <Button marginY={8} marginRight={12} iconAfter={EditIcon}
            className={classnames({ active: location.pathname === "/profile/create test" })}
            onClick={() => { 
              history.push("/profile/create test");
            }}
          >
            <span>create test</span>
          </Button>
        </NavItem>
        <NavItem>
          <Button marginY={8} marginRight={12} iconAfter={ManualIcon}
            className={classnames({ active: location.pathname === "/profile/own dictionary" })}
            onClick={() => { 
              history.push("/profile/own dictionary");
            }}
          >
            <span>own dictionary</span>
          </Button>
        </NavItem>
        <NavItem>
          <Button marginY={8} marginRight={12} iconAfter={HomeIcon}
            className={classnames({ active: location.pathname === "/profile/home work" })}
            onClick={() => { 
              history.push("/profile/home work");
            }}
          >
            <span>home work</span>
          </Button>
        </NavItem>
          {/* {
            role === "admin" && (
            <NavItem>
              <NavLink
                className={classnames({ active: location.pathname === "/profile/administration" })}
                onClick={() => { 
                  history.push("/profile/administration");
                }}
              >
                <span>administration</span>
              </NavLink>
            </NavItem>
            )
          } */}
      </Nav>
  )

  return (
    <div>
      { list }
      <TabsContent path={location.pathname} />
    </div>
  );
}

export default Tabs;