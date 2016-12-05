const React = require('react')
const ReactDom = require('react-dom')

const App = React.createClass({
  render: function() {
    return (
      <div>
        <div id = "header"></div>
        <div className = "container"></div>
          <div className = "column">
            <InboxPane />
          </div>
          <div className = "column"></div>
          <div className = "column"></div>
      </div>
    )
  }
})

const InboxPane = React.createClass({
  render: function(){
    return (
      <div id = "inbox-pane">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Chat Received</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <InboxItem />
          </tbody>
        </table>
      </div>
    )
  }
})

const InboxItem = React.createClass({
  render: function(){
    return (
      <tr>
       <td>5pm</td>
       <td>Yaseen loves snowboarding</td>
       <td>Confirmed</td>
      </tr>
    )
  }
})

ReactDom.render(<App/>, document.getElementById("main"))
