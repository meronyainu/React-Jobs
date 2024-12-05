/* eslint-disable react/prop-types */
import ClipLoader from 'react-spinners/ClipLoader';

const override ={
    display: 'block',
    margin: '100px auto'
}

const Spinner = ({loading }) => {
  return (
    <ClipLoader
    loading={loading}
    color= '#4338ac'
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner