import React, {Component} from 'react';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            rows : [
                {
                    id:1,
                    name:"subhash",
                    email:"subhash@gmail.com",
                    data1 :[
                        {address:'goa'},
                    ]
                }
            ]
        }
    }

  render(){
      console.log(this.state.rows);
      return(
          <div>Hello</div>
      );
  }  
}
export default Home;