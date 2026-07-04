import { CheckCircle, Loader2 } from "lucide-react";

const WorkflowStatus = ({ workflow = [], loading }) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-bold text-slate-800">
        AI Processing
      </h2>

      {workflow.length === 0 ? (
        <p className="text-slate-500">
          Workflow will appear here after generation starts.
        </p>
      ) : (
        <div className="space-y-5">
          {workflow.map((step, index) => {
            const isLast = index === workflow.length - 1;

            return (
              <div key={index} className="flex items-start gap-4">
                {loading && isLast ? (
                  <Loader2
                    className="mt-1 animate-spin text-blue-600"
                    size={22}
                  />
                ) : (
                  <CheckCircle
                    className="mt-1 text-green-500"
                    size={22}
                  />
                )}

                <div>
                  <p
                    className={`font-semibold ${
                      loading && isLast
                        ? "text-blue-600"
                        : "text-green-600"
                    }`}
                  >
                    {step}
                  </p>

                  <p className="text-sm text-slate-500">
                    {loading && isLast
                      ? "Processing..."
                      : "Completed"}
                  </p>
                </div>
              </div>
            );
          })}

          {!loading && (
            <div className="mt-6 rounded-xl bg-green-50 p-4 text-green-700 font-semibold">
              🎉 Workflow Completed Successfully
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkflowStatus;