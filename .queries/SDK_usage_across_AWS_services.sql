-- SELECT s.report_name,
--        COUNT(DISTINCT d.enc_customer_id),
--        SUM(d.request_count)
-- FROM ecs_daily_requests d
--   LEFT JOIN dim_customers c ON d.enc_customer_id = c.enc_customer_id
--   LEFT JOIN dim_customers_internal_flag i on d.enc_customer_id = i.enc_customer_id
--   LEFT JOIN dim_services s ON d.service_id = s.service_id
-- WHERE i.is_internal_flag IS FALSE
-- AND   d.end_date BETWEEN '2023-03-20' AND '2023-03-21'
-- GROUP BY s.report_name;

-- SELECT * from dim_services LIMIT 10;

SELECT * from dim_ip_types;

-- SELECT *
-- FROM fact_daily_requests d
-- WHERE d.end_date > CURRENT_DATE - INTERVAL '1 week'
-- AND d.ip_type_id = 2 -- refer to DIM_IP_TYPES table for ip type mapping
-- AND d.region_id = 1
-- AND d.service_id = 24