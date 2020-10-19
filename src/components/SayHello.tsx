import React, { ReactElement } from "react";

type SayHelloProps = {
  to?: string;
};

const SayHello: React.FC<SayHelloProps> = ({
  to = "someone",
}: SayHelloProps): ReactElement => {
  return <span>Hello {to}!</span>;
};

export default SayHello;
