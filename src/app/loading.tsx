export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-secondary border-t-primary rounded-full animate-spin mx-auto"></div>
        <h1 className="mt-4 text-xl font-semibold text-textMedium">
          Loading...
        </h1>
        <p className="text-sm text-textLight">
          Please wait while we load the content for you.
        </p>
      </div>
    </div>
  );
}
