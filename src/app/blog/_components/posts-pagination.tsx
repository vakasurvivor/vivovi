'use client';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/utils';
import { getPaginationSequence } from '@/utils/get-pagination-sequence';
import { parseAsInteger, useQueryState } from 'nuqs';

interface PaginationProps {
  totalPosts: number;
  LIMIT: number;
  className?: string;
}

export default function PostsPagination({
  totalPosts,
  LIMIT,
  className,
}: PaginationProps) {
  const [currentPage, setPage] = useQueryState(
    'page',
    parseAsInteger.withDefault(1),
  );
  const totalPages = Math.ceil(totalPosts / LIMIT);

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn(
              currentPage !== 1
                ? 'opacity-100'
                : 'pointer-events-none cursor-default opacity-0',
            )}
            onClick={() => setPage(currentPage - 1)}
            href="#"
          />
        </PaginationItem>

        {getPaginationSequence(totalPages, currentPage, {
          frontExpand: 6,
          backExpand: 6,
        }).map((page, index) => {
          if (page === 'ellipsis') {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => setPage(page as number)}
                href="#"
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {currentPage !== totalPages && (
          <PaginationItem>
            <PaginationNext onClick={() => setPage(currentPage + 1)} href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
