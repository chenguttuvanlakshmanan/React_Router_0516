import React , {Fragment} from 'react'
import classes from './Layout.module.css'
import MainNavigation from './Navigation'

const Layout = (props) => {
    return (
      <Fragment>
          <MainNavigation></MainNavigation>
          <main className={classes.main}>
              {props.children}
          </main>
      </Fragment>
    )
}

export default Layout;