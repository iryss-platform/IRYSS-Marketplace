-- Create all IRYSS databases on first PostgreSQL start
-- Each application gets its own database to prevent migration collisions

CREATE DATABASE iryss_marketplace;
CREATE DATABASE iryss_payload;
CREATE DATABASE iryss_content;
CREATE DATABASE iryss_connector;
