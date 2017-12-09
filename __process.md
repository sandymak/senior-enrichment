EXPRESS


SEQUELIZE

  File Structure
  - db folder (index) - exports the generated db
  - models folder
      - index - requires all other tables / set up associations
      - ind models folder

  DB creation
    1) requires Sequelize, chalk (OPTIONAL!!!)
    2) console.log(chalk.yello('Opening database connection')) (OPTIONAL!!!)
    2) modules.exports = new Sequelize(`postgres://localhost:5432/${NAME_OF_DB}`,{ logging: false })

  Model creation
  requires
  1) Sequelize
  2) * subsequent models that are associated

  workflow
    1) module.exports
    2) db.define(INSTANCE_NAME, {
      column: {
        type: Sequelize._____,
        etc....,
        validate: {
          etc....
        }
      },
      etc....
    }, {
      getterMethods: {
        func() {
          etc...........
        }
      }
    });

    3) instance method
      INSTANCE_NAME.prototype.instanceMethod = function () {
        this.getValue('this.column')....
        etc....
      }


REACT

COMPONENT creation workflow

imports
1) React, {component}
2) thunk func
3) connect

building.....
1) create presentational component
2) mapStateToProps func
3) mapDispatchToProps func
4) const presComponentContainer = connect (mapStateToProps, mapDispatchToProps) (PresentationComponent)
5) export default presComponentContainer

REACT-ROUTER-DOM

Generate LINK TO (URL) workflow
import
1) { Link } from 'react-router-dom'

Syntax
const URL = 'whatever'
<Link className="___" to={`/${URL}`}>

Generate ROUTER / SWITCH (invoke components based on path) workflow
import
1) HashRouter as Router
2) Route
3) Switch
4) * All other components that your URL will invoke

Syntax
<Router>
  <Switch>
  // regular rendering components
      <Route(exact) path ="/_____" component={_____} />
  // Passing props and to components
      <Route(exact) path ="/_____" render={() => <'_____' prop={this.state.prop} />} />
  // default
    <Route component={MAIN}>
  </Switch>
</Router>


REACT-REDUX (aka the STORE)
Combined Reducer

Individual reducer workflow
  1) import axios
  2) Action Type
  3) Action Creator
  4) Thunk Action Creator
  5) reducer
  6) export default reducer









