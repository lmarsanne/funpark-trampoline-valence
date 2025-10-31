import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
const Reservation = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cart.guidap.net/v1/";
    script.async = true;
    script.defer = true;
    script.setAttribute('data-token', 'q0CVtwPX7jr9ciyYgWFGTlvuBLHsQzm3ohU4');
    script.setAttribute('data-lang', 'fr');
    script.setAttribute('data-currency', 'EUR');
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-4xl">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-lg">
                  Je réserve mon activité
                </TableCell>
                <TableCell className="text-right">
                  <guidap-reserve-button></guidap-reserve-button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-lg">
                  Kid Jumper 7 à 18 ans
                </TableCell>
                <TableCell className="text-right">
                  <div dangerouslySetInnerHTML={{ __html: '<guidap-activity-details-button activity-uuid="x3KsSvBw18y2TXAQqfkYDCchZt40LiRaGubV"></guidap-activity-details-button>' }} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>;
};
export default Reservation;