import { toggleCheckbox } from '../redux/actions';
import { connect } from 'react-redux';
import ClockWithSwitch from './ClockWithSwitch';

const mapStateToProps = state => {
  return {
    checked: state.checkbox.checked
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: () => dispatch(toggleCheckbox())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClockWithSwitch);