'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

const MESCHAC_AVATAR = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&h=128&q=80'
const BERNARD_AVATAR = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&h=128&q=80'
const THEO_AVATAR = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=128&h=128&q=80'
const GLODIE_AVATAR = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&h=128&q=80'

export type Customer = {
  id: number | string
  date: string
  status: 'Paid' | 'Cancelled' | 'Ref'
  statusVariant: 'success' | 'danger' | 'warning'
  name: string
  avatar: string
  revenue: string
}

export type CustomersTableCardProps = {
  title?: string
  subtitle?: string
  className?: string
  customers?: Customer[]
}

const DEFAULT_CUSTOMERS: Customer[] = [
  {
    id: 1,
    date: '10/31/2023',
    status: 'Paid',
    statusVariant: 'success',
    name: 'Bernard Ng',
    avatar: BERNARD_AVATAR,
    revenue: '$43.99',
  },
  {
    id: 2,
    date: '10/21/2023',
    status: 'Ref',
    statusVariant: 'warning',
    name: 'Méschac Irung',
    avatar: MESCHAC_AVATAR,
    revenue: '$19.99',
  },
  {
    id: 3,
    date: '10/15/2023',
    status: 'Paid',
    statusVariant: 'success',
    name: 'Glodie Ng',
    avatar: GLODIE_AVATAR,
    revenue: '$99.99',
  },
  {
    id: 4,
    date: '10/12/2023',
    status: 'Cancelled',
    statusVariant: 'danger',
    name: 'Theo Ng',
    avatar: THEO_AVATAR,
    revenue: '$19.99',
  },
]

const Badge = ({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'success' | 'danger' | 'warning'
}) => {
  const styles =
    variant === 'success'
      ? 'bg-lime-500/15 text-lime-800 dark:text-lime-300'
      : variant === 'danger'
      ? 'bg-red-500/15 text-red-800 dark:text-red-300'
      : 'bg-yellow-500/15 text-yellow-800 dark:text-yellow-300'

  return (
    <span className={cn('rounded-full px-2 py-1 text-xs font-medium', styles)}>
      {children}
    </span>
  )
}

/**
 * Responsive, polished table wrapped in a card container.
 * - Sticky header on wide screens
 * - Horizontal scroll on small screens
 * - Subtle borders, shadows, and hover states
 */
export default function CustomersTableCard({
  title = 'Customers',
  subtitle = 'New users by First user primary channel group (Default Channel Group)',
  customers = DEFAULT_CUSTOMERS,
  className,
}: CustomersTableCardProps) {
  return (
    <section
      className={cn(
        'glass-strong shadow-foreground/5 inset-ring-1 inset-ring-background ring-foreground/5 relative w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-md ring-1',
        className
      )}
      aria-label={title}
    >
      {/* Header */}
      <div className="space-y-1 border-b border-white/10 p-6">
        <div className="flex items-center gap-1.5">
          <span className="bg-white/20 size-2 rounded-full border border-white/5" />
          <span className="bg-white/20 size-2 rounded-full border border-white/5" />
          <span className="bg-white/20 size-2 rounded-full border border-white/5" />
        </div>
        <h2 className="text-lg font-semibold leading-none tracking-tight text-white mt-4">{title}</h2>
        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>

      {/* Table wrapper for responsive overflow */}
      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse text-sm">
          <thead className="glass supports-[backdrop-filter]:backdrop-blur-sm sticky top-0 z-10 border-b border-white/10">
            <tr className="text-muted-foreground *:text-left *:px-3 *:py-3 *:font-medium">
              <th className="w-12">#</th>
              <th className="min-w-[120px]">Date</th>
              <th className="min-w-[120px]">Status</th>
              <th className="min-w-[220px]">Customer</th>
              <th className="min-w-[120px] text-right pr-4">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, idx) => (
              <tr
                key={customer.id}
                className="hover:bg-white/5 transition-colors *:px-3 *:py-2 border-b border-white/10 last:border-0"
              >
                <td className="text-muted-foreground">{idx + 1}</td>
                <td className="whitespace-nowrap text-muted-foreground">{customer.date}</td>
                <td>
                  <Badge variant={customer.statusVariant}>{customer.status}</Badge>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="size-7 overflow-hidden rounded-full ring-1 ring-white/20">
                      <img
                        src={customer.avatar}
                        alt={customer.name}
                        width={28}
                        height={28}
                        loading="lazy"
                      />
                    </div>
                    <span className="text-foreground font-medium truncate">{customer.name}</span>
                  </div>
                </td>
                <td className="text-right pr-4 font-medium tabular-nums text-muted-foreground">{customer.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer (optional) */}
      <div className="flex items-center justify-between border-t border-white/10 p-4 text-xs text-muted-foreground">
        <span>
          Showing <strong>{customers.length}</strong> {customers.length === 1 ? 'row' : 'rows'}
        </span>
        <span>Updated just now</span>
      </div>
    </section>
  )
}
