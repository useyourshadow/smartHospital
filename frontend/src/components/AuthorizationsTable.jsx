import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { Plus, Clock, CheckCircle, XCircle } from "lucide-react";



const getStatusBadge = (status) => {
  switch (status) {
    case "pending":
      return (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          <Clock className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      );
    case "approved":
      return (
        <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Approved
        </Badge>
      );
    case "denied":
      return (
        <Badge variant="secondary" className="bg-red-100 text-red-800 hover:bg-red-100">
          <XCircle className="w-3 h-3 mr-1" />
          Denied
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
};

export function AuthorizationsTable({ data, onNewAuthorization }) {


  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Prior Authorizations</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              A complete list of all authorization requests
            </p>
          </div>
        <Button
          className="gap-2 bg-white text-[#6A5AF9] border border-[#6A5AF9] hover:bg-purple-50"
          onClick={onNewAuthorization}
        >
          <Plus className="w-4 h-4" />
          New Authorization
        </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient MRN</TableHead>
              <TableHead>Claim #</TableHead>
              <TableHead>Insurance Provider</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((auth) => (
              <TableRow key={auth.id}>
                <TableCell className="font-medium">{auth.patientMRN}</TableCell>
                <TableCell>{auth.claimNumber}</TableCell>
                <TableCell>{auth.insuranceProvider}</TableCell>
                <TableCell>{formatDate(auth.date)}</TableCell>
                <TableCell>{getStatusBadge(auth.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}