import React from 'react';

const Spinner = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui big text loader'>{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...',
};
// export class Spinner extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <p />
//         </div>
//       </>
//     );
//   }
// }

export default Spinner;
