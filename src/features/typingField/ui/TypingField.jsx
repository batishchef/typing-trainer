import React from "react";
import { useSelector } from "react-redux";
import TypingFieldPending from "./typingFieldPending/TypingFieldPending";
import TypingFieldRejected from "./typingFieldRejected/TypingFieldRejected";
import TypingFieldFulfilled from "./typingFieldFulfilled/TypingFieldFulfilled";


const TypingField = () => {
  const textStatus = useSelector((state) => state.text.status)

  if(textStatus === 'pending') return <TypingFieldPending />

  if(textStatus === 'fulfilled') return <TypingFieldFulfilled />

  if(textStatus === 'rejected') return <TypingFieldRejected />

};

export default TypingField;
