import './Loader.css';
import LoaderSection from './LoaderSection';

const Loader = () => {
  return (
    <LoaderSection>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderSection>
  )
}

export default Loader;