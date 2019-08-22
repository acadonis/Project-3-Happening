import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

//IN THE CLASS
this.state = {
  date: null
}

handleChange(date) {
  this.setState({
    date: date
  })
}

////IN THE RENDER
const local_date = moment(this.state.date).format('YYYY-MM-DD')
const local_time = moment(this.state.date).format('h:mm a')
const time = moment(this.state.date).format('x')
console.log(local_time)
console.log(local_date)
console.log(time)
console.log(this.state.date)


<div className="tile is-child box">
  <DatePicker
    selected={this.state.date}
    onChange={this.handleChange}
    onSelect={this.handleSelect}
    showTimeSelect
    dateFormat="Pp"
  />
</div>
