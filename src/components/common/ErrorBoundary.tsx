import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/config/routes.config'
import { cn } from '@/utils/cn'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          className={cn(
            'flex min-h-[50vh] flex-col items-center justify-center gap-4',
            'px-4 text-center',
          )}
        >
          <h1 className="text-2xl font-semibold text-text-primary">
            Something went wrong
          </h1>
          <p className="text-text-secondary">
            An unexpected error occurred. Please try again.
          </p>
          <Link
            to={ROUTES.HOME}
            className="text-primary underline-offset-4 hover:underline"
          >
            Return to home
          </Link>
        </div>
      )
    }

    return this.props.children
  }
}
