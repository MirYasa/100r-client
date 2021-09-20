import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from '../componetns/Login/Login'
import CreateAccount from '../componetns/Login/CreateAccount'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import '../scss/animateLogin.scss'

const LoginPage = () => {
  return (
   <Route render={(location) => (
     <TransitionGroup>
       <CSSTransition
         key={location.location.key}
         timeout={300}
         classNames={'fade'}>
         <Switch location={location.location}>
           <Route path={'/'} exact component={Login}/>
           <Route path={'/createAccount'} exact component={CreateAccount}/>
         </Switch>
       </CSSTransition>
     </TransitionGroup>
   )}/>

  )
}
export default LoginPage