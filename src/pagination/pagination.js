/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import PaginationButton from "./pagination-btn";
import styles from "./pagination.module.scss";
import PropTypes from "prop-types";

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
  numOfPages: PropTypes.number,
  color: PropTypes.oneOf(["primary", "secondary", "dark"]),
  hideFirstButton: PropTypes.bool,
  hideLastButton: PropTypes.bool,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
};

const Pagination = ({
  items,
  onChangePage,
  initialPage = 1,
  pageSize = 5,
  color = "secondary",
  numOfPages = 10,
  hideLastButton = false,
  hideFirstButton = false,
  hideNextButton = false,
  hidePrevButton = false,
}) => {
  const [pagerr, setPager] = useState({});

  const setPage = (page) => {
    let pager = pagerr;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = getPager(items.length, page, pageSize);

    let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    setPager(pager);

    onChangePage(pageOfItems);
  };

  useEffect(() => {
    if (items && items.length) {
      setPage(initialPage);
    }
  }, [items, initialPage]);

  useCallback(() => setPage(initialPage), []);

  const getPager = (totalItems, currentPage, pageSize) => {
    currentPage = currentPage || 1;

    pageSize = pageSize || 10;

    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage, endPage;
    if (totalPages <= numOfPages) {
      startPage = 1;
      endPage = numOfPages;
    } else {
      if (currentPage <= Math.ceil(numOfPages / 2 + 1 / 2)) {
        startPage = 1;
        endPage = numOfPages;
      } else if (currentPage + (Math.round(numOfPages / 2) - 1) >= totalPages) {
        startPage = totalPages - (numOfPages - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.round(numOfPages / 2 - 1 / 2);
        endPage = currentPage + (Math.round(numOfPages / 2) - 1);
      }
    }

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  if (!pagerr.pages || pagerr.pages.length <= 1) {
    return null;
  }

  const themeColor = () => {
    switch (color) {
      case "primary":
        return `${styles.pagination}`;

      case "secondary":
        return `${styles.pagination} ${styles.secondary}`;

      case "dark":
        return `${styles.pagination} ${styles.dark}`;

      default:
        return `${styles.pagination}`;
    }
  };

  return (
    <ul className={themeColor()}>
      <li
        className={
          pagerr.currentPage === 1
            ? `${styles.paginationItem} ${styles.disabled}`
            : `${styles.paginationItem}`
        }
        style={
          hideFirstButton === true ? { display: "none" } : { display: "flex" }
        }
      >
        <PaginationButton
          className={`${styles.paginationButton} ${styles.btnFirst}`}
          onClick={() => setPage(1)}
        >
          First
        </PaginationButton>
      </li>
      <li
        className={
          pagerr.currentPage === 1
            ? `${styles.paginationItem} ${styles.disabled}`
            : `${styles.paginationItem}`
        }
        style={
          hidePrevButton === true ? { display: "none" } : { display: "flex" }
        }
      >
        <PaginationButton
          className={`${styles.paginationButton} ${styles.btnPrev}`}
          onClick={() => setPage(pagerr.currentPage - 1)}
        >
          Prev
        </PaginationButton>
      </li>
      {pagerr.pages.map((page, index) => (
        <li
          key={index}
          className={
            pagerr.currentPage === page
              ? `${styles.paginationItem} ${styles.active}`
              : `${styles.paginationItem} ${styles.hidden}`
          }
        >
          <PaginationButton
            className={`${styles.paginationButton} ${styles.btnPage}`}
            onClick={() => setPage(page)}
          >
            {page}
          </PaginationButton>
        </li>
      ))}
      <li
        className={
          pagerr.currentPage === pagerr.totalPages
            ? `${styles.paginationItem} ${styles.disabled}`
            : `${styles.paginationItem}`
        }
        style={
          hideNextButton === true ? { display: "none" } : { display: "flex" }
        }
      >
        <PaginationButton
          className={`${styles.paginationButton} ${styles.btnNext}`}
          onClick={() => setPage(pagerr.currentPage + 1)}
        >
          Next
        </PaginationButton>
      </li>
      <li
        className={
          pagerr.currentPage === pagerr.totalPages
            ? `${styles.paginationItem} ${styles.disabled}`
            : `${styles.paginationItem}`
        }
        style={
          hideLastButton === true ? { display: "none" } : { display: "flex" }
        }
      >
        <PaginationButton
          className={`${styles.paginationButton} ${styles.btnLast}`}
          onClick={() => setPage(pagerr.totalPages)}
        >
          Last
        </PaginationButton>
      </li>
    </ul>
  );
};

Pagination.propTypes = propTypes;
export default Pagination;
