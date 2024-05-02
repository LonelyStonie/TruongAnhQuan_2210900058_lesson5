import React, { Components } from 'react';

class TAQ_Form2 extends Component {
    render() {
        return(
            <div>
            <form>
                <label>khoa hoc</label>
                <selct value={this.state.khoahoc} name='khoahoc'>
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='HTML'>HTML</option>
                    <option value='HTML'>HTML</option>
                </selct>
                </form>
            
            </div>
        )
    }
}