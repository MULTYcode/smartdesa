interface ProgressBarProps {
    percentage: number
  }
  
  export function ProgressBar({ percentage }: ProgressBarProps) {
    return (
      <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-teal-500 rounded-full" style={{ width: `${percentage}%` }}>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-xs font-medium">
            {percentage.toFixed(2)}%
          </div>
        </div>
      </div>
    )
  }
  