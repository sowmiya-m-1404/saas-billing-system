export default function OrganizationsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Organizations Management
      </h1>

      <div className="bg-white rounded-xl shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3">Organization</th>
              <th className="text-left p-3">Plan</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">Acme Corp</td>
              <td className="p-3">Premium</td>
              <td className="p-3 text-green-600">Active</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">Tech Solutions</td>
              <td className="p-3">Business</td>
              <td className="p-3 text-green-600">Active</td>
            </tr>

            <tr>
              <td className="p-3">Startup Hub</td>
              <td className="p-3">Basic</td>
              <td className="p-3 text-yellow-600">Trial</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}