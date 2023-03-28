import React, { Component } from 'react'


export default class Com extends Component {
  state={
    name : '',
    dept: '',
    rate: ' ',
    data: []
  }
  handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value})
    // this.setState({[e.target.dept]:e.target.value})
  }
  handleSubmit=()=>{
    const ObjData = {
      name: this.state.name,
      dept: this.state.dept,
      rate: this.state.rate
    }
    const arr = this.state.data;
    arr.push(ObjData)

    // this.state.data.push(ObjData)
    this.setState({[this.state.data]:arr}) //latest value is stored as key value pair
    //this.setState(this.state.data = arr) //mutating the state directly 
    console.log(this.state.name)
    console.log(this.state.data)
  }
  render() {
    return (
      <>
        <h1>EMPLOYEE FEEDBACK FORM</h1>
        <div className='name'> Name :
        <input type="text" className='nameround' placeholder='enter name' name='name' onChange={this.handleChange}/>
        </div>
        <br />
        <div className='dept'> Department :
        <input type="text" className='deptround' placeholder='enter department' name='dept' onChange={this.handleChange}/>
        </div>
        <br />
        <div className='rating'> Rating :
        <input type="number" className='rateround' placeholder='enter rating' name='rate' onChange={this.handleChange}/>
        </div>
        <br />
        <br />
        <br />
        
        <button className='submit'  onClick={this.handleSubmit}>Submit</button>
        <br />
        <br />
        <br />
        
        {/* <hr className='hr' /> */}

  <div className='details'>
      {this.state.data.map((item,index)=>{
        return (
    <div className='details-entered'>
          <h1 key={index}> Name: {item.name} | Department: {item.dept} | Rating: {item.rate}</h1>
      </div>

        )
      })}
  </div>
      </>
    )
  }
}











