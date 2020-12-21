import React from 'react';
import './nav.css';
import About from './About';
import Code from './Code';
import Designs from './Designs';
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'About', render: () => <Tab.Pane><About /> </Tab.Pane> },
  { menuItem: 'Designs', render: () => <Tab.Pane><Designs /></Tab.Pane> },
  { menuItem: 'Code', render: () => <Tab.Pane><Code /></Tab.Pane> },
]

function Nav() {

    return (
     <div className="Navy">
       <h1 className="Name">Derek Lofton</h1>
       <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
     </div>
    )
    
  }

export default Nav;