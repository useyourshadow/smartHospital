import { Clock, CheckCircle, XCircle } from "lucide-react";
import { SummaryCard } from "../components/SummaryCard";
import { AuthorizationsTable } from "../components/AuthorizationsTable";

// Mock data (assuming it's the same as before)
const authorizationData = [
  {
    id: "1",
    patientMRN: "MRN-001234",
    claimNumber: "CLM-2024-0001",
    insuranceProvider: "Blue Cross Blue Shield",
    date: "2024-03-15",
    status: "pending"
  },
  {
    id: "2",
    patientMRN: "MRN-005678",
    claimNumber: "CLM-2024-0002",
    insuranceProvider: "Aetna",
    date: "2024-03-14",
    status: "approved"
  },
  // ... other data objects
  {
    id: "8",
    patientMRN: "MRN-005566",
    claimNumber: "CLM-2024-0008",
    insuranceProvider: "Anthem",
    date: "2024-03-08",
    status: "approved"
  }
];
export function DashboardPage() {
  const pendingCount = authorizationData.filter(auth => auth.status === "pending").length;
  const approvedCount = authorizationData.filter(auth => auth.status === "approved").length;
  const deniedCount = authorizationData.filter(auth => auth.status === "denied").length;

  const handleNewAuthorization = () => {
    console.log("Creating new authorization...");
  };

  return (
    // Changed background to purple and default text to white
    <div className="w-screen min-h-screen bg-[var(--primary-purple)] text-white p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl">Prior Authorizations Dashboard</h1>
          {/* Using slightly transparent white for the subtitle */}
          <p className="text-white/80">
            Manage and track prior authorization requests for patient treatments
          </p>
        </div>

        {/* Summary Cards */}
        <div className="flex flex-col sm:flex-row gap-6 py-4">
          <div className="flex-1">
            <SummaryCard
              title="Pending Authorizations"
              value={pendingCount}
              description="Awaiting review and approval"
              icon={Clock}
              iconColor="text-[#6A5AF9]" // Changed icon color to purple
            />
          </div>
          <div className="flex-1">
            <SummaryCard
              title="Successful Authorizations"
              value={approvedCount}
              description="Approved and processed"
              icon={CheckCircle}
              iconColor="text-[#6A5AF9]" // Changed icon color to purple
            />
          </div>
          <div className="flex-1">
            <SummaryCard
              title="Rejected Authorizations"
              value={deniedCount}
              description="Denied or rejected requests"
              icon={XCircle}
              iconColor="text-[#6A5AF9]" // Changed icon color to purple
            />
          </div>
        </div>

        {/* Prior Authorizations Table */}
        <AuthorizationsTable
          data={authorizationData}
          onNewAuthorization={handleNewAuthorization}
        />
      </div>
    </div>
  );
}