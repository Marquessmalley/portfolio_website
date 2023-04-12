import { Box, Card, CardContent, Divider } from "@mui/material";
const ServiceCard = ({ id, icon, title, desc }) => {
  return (
    <Card
      key={id}
      sx={{ maxWidth: 350, background: "rgb(25,29,43)", margin: "1rem" }}
    >
      <CardContent>
        <Box>
          <p>ICON</p>
        </Box>
        <p style={{ color: "#fff", fontWeight: 600, fontSize: "20px" }}>
          {title}
        </p>
        <Divider sx={{ border: ".1px solid grey", width: "20%" }} />
        <p style={{ color: "#a4acc4" }}>{desc}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
