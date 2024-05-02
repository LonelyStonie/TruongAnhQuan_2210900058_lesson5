import React, { Components } from 'react';

class App extends Components {
    construction(props){
        super(pros);
        this.state = {
            studentName:"truong anh quan"
        }
    }
handleChange = (ev)=>{
    let ten = ev.target.name;
    let gtri= ev.target.value
    this.setState({
        [ten]:gtri
    }

    )
}

  render() {
    return (
      <div>
        <form>
            <div>
                <label>ho va ten</label>
                <input name = 'sutdentName'value={this.studentName}
                    onChange={handleChange}/>
            </div>
            <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
