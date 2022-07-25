import Airtable from "airtable";
const base = new Airtable({ apiKey: "keyjbCfsSdhIhQFsh" }).base(
  "app6PE5rMIkIIqPNZ"
);

export function dataBase() {
  const [parkingLots, setParkingLots] = useState();

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app6PE5rMIkIIqPNZ/Projects?view=Grid%20view",
      {
        headers: { Authorization: "Bearer keyjbCfsSdhIhQFsh" },
      }
    )
      .then((res) => {
        return res.json(); // Promise gaekchae
      })
      .then((json) => {
        setParkingLots(json.records);
        console.log(json); // prints json화된 data from server
      })
      .catch((error) => console.log(error));
  }, []);
}

/*
    base("parking")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        console.log(records);
        fetchNextPage();
      });
  }, []);
  */
