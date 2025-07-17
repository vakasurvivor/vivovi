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
import { cn } from '@/utils/cn';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  className?: string;
}

export default function PostsPagination({
  totalPages,
  currentPage,
  className,
}: PaginationProps) {
  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination className={cn(className)}>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/blog?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {currentPage === totalPages - 4 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage < totalPages - 4 &&
          Array.from(
            { length: 4 },
            (_, i) => totalPagesArray[currentPage - 1 + i],
          ).map((page, i) => {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`/blog?page=${page}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

        {currentPage >= totalPages - 4 &&
          Array.from(
            { length: 5 },
            (_, i) => totalPagesArray[totalPages - 5 + i],
          ).map((page, i) => {
            return (
              <PaginationItem key={i}>
                <PaginationLink
                  href={`/blog?page=${page}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

        {currentPage !== totalPages && (
          <>
            {currentPage < totalPages - 4 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href={`/blog?page=${totalPages}`}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            <PaginationItem>
              <PaginationNext href={`/blog?page=${currentPage + 1}`} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </Pagination>
  );
}
