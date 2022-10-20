
import Button from "components/atoms/Button/Button";
import Image from "next/image";
import React from "react";
import ConfirmationBackgroundImage from "../../../assets/confirmation.svg";
import styles from "./Confirmation.module.scss";

const Confirmation = () => {
  return (
    <div className={styles.confirmationContainer}>
      <div className="w-6/12 mx-auto">
        <Image src={ConfirmationBackgroundImage} alt="" width={825} />
        <div className='text-center my-5 font-thin'>
          <p>
            Thank you for submitting, your job has been posted. if you need help
            please contact us via
            <p>
              Email support: hiretalent@afrisplash.com
            </p>
          </p>
        </div>
      </div>

      <div className="flex space-x-4 items-center justify-center mb-5">
        <div className="hidden md:flex space-x-4">
          <Button
            type="bordered"
            color="dark_blue"
            text="Manage jobs"
            borderColor="dark_blue"
            classes="w-36 md:w-28 xl:w-36 rounded-md capitalize h-10 text-sm text-dark_blue border border-dark_blue hover:bg-dark_blue hover:text-white  hover:opacity-80"
          />
          <Button
            type="filled"
            bgColor="primary_green"
            color="white"
            text="View jobs"
            classes="w-36 h-10  md:w-28 xl:w-36 rounded-md text-sm capitalize text-white bg-primary_green hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
