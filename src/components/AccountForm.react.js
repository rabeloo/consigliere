var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  getInitialState: function(){
    return {accountName:'',accountNumber:'',roleArn:'',accessKey:'',accessSecret:'',choice:'role'}
  },
  handleSubmit: function(e){
    e.preventDefault();
  },
  handleNameChange: function(e){
    this.setState({accountName:e.target.value});
  },
  handleNumberChange: function(e){
    this.setState({accountNumber:e.target.value});
  },
  handleArnChange: function(e){
    this.setState({roleArn:e.target.value});
  },
  handleAccessKeyChange: function(e){
    this.setState({accessKey:e.target.value});
  },
  handleAccessSecretChange: function(e){
    this.setState({accessSecret:e.target.value});
  },
  handleChoiceChange: function(e){
    switch(e.target.id){
      case 'roleChoice':
        this.setState({choice:'role'});
      break;
      case 'keysChoice':
        this.setState({choice:'keys'});
      break;
    }
  },
  changeChoice: function(e){
    switch(e.target.id){
      case 'roleArnInput':
        this.setState({choice:'role'});
      break;
      case 'accessKeyInput':
      case 'accessSecretInput':
        this.setState({choice:'keys'});
      break;
    }
  },
  render: function(){
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="accountNameInput">Account Name</label>
            <input type="text" className="form-control" id="accountNameInput" placeholder="Name" value={this.state.accountName} onChange={this.handleNameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="accountNumberInput">Account Number</label>
            <input type="text" className="form-control" id="accountNumberInput" placeholder="Number" value={this.state.accountNumber} onChange={this.handleNumberChange}/>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                { function(){
                  if(this.state.choice=='role') {
                    return <input id='roleChoice' name='choice' type="radio" checked='true' onChange={this.handleChoiceChange}/>
                  }
                  else {
                    return <input id='roleChoice' name='choice' type="radio" onChange={this.handleChoiceChange}/>
                  }
                }.call(this)}
              </span>
              <input id='roleArnInput' type="text" className="form-control" placeholder='Role ARN' value={this.state.roleArn} onFocus={this.changeChoice} onChange={this.handleArnChange}/>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon">
                { function(){
                  if(this.state.choice=='keys') {
                    return <input id='keysChoice' name='choice' type="radio" checked='true' onChange={this.handleChoiceChange}/>
                  }
                  else {
                    return <input id='keysChoice' name='choice' type="radio" onChange={this.handleChoiceChange}/>
                  }
                }.call(this)}
              </span>
              <input id='accessKeyInput' type="text" className="form-control" placeholder='Access Key' value={this.state.accessKey} onFocus={this.changeChoice} onChange={this.handleAccessKeyChange}/>
              <input id='accessSecretInput' type='password' className='form-control' placeholder='Secret' value={this.state.accessSecret} onFocus={this.changeChoice} onChange={this.handleAccessSecretChange}/>
            </div>
          </div>
          <button type="submit" className="btn btn-default">Add Account</button>
        </form>
      </div>
    )
  }
});
