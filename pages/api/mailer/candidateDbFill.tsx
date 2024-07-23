import { sendMail } from "../../../utils/mailService";

const handler = async (req: any, res: any) => {

  const data = JSON.parse(req.body);

  try {
    const { method } = req;
    switch (method) {
      case "POST": {
        await sendMail(
          "Candidate Database Application",
          process.env.NODEMAILER_EMAIL || '',
          `${data.fullname} (contact mail: ${data.email} | contact phone: ${data.phonenumber}) has submitted data into the Candidate Database.`,
          data.attachment

        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err: any) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;