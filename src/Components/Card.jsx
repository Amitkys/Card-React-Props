import "./Card.css";
import { Button } from "@material-tailwind/react";
function Card(props) {
  return (
    <div className=" h-full w-full flex justify-center items-center flex-col">
      <div className=" h-[400px]  bg-gray-800 lg:w-[400px] w-[350px] rounded-2xl flex justify-center items-center flex-col">
        <img
          className="h-[155px] w-[150px] rounded-full "
          src={props.profileSource}
          alt=""
        />
        <h1 title="Profile Name" className="google-font text-[25px] text-white  font-bold  ">
          {" "}
          {props.personName}{" "}
        </h1>
        <hr className="w-full my-5" />
        <p title="Description" className="google-font2 mb-[25px] text-center  font-bold"> {props.desc} </p>
        <div>
        <Button className= {`${props.btn1_color} mr-[120px] normal-case `} >{props.btn1_name}</Button>
        <Button className= {`${props.btn2_color} normal-case`} >{props.btn2_name}</Button>
        </div>
      </div>
    </div>
  );
}



export default Card;
