CREATE DATABASE financedb;

USE financedb;

CREATE TABLE staff_role (
    role_id int NOT NULL AUTO_INCREMENT,
    role_name varchar(20) NOT NULL,
    PRIMARY KEY (role_id)
);

CREATE TABLE staff (
    user_key int NOT NULL,
    user_name varchar(255) NOT NULL,
	  password varchar(255) NOT NULL,
    user_role int,
    UNIQUE (user_name),
    PRIMARY KEY (user_key),
	  FOREIGN KEY (user_role) REFERENCES staff_role(role_id)
);

CREATE TABLE examination_claims (
    lecture_id varchar(20) NOT NULL,
    lecture_name varchar(255) NOT NULL,
    designation varchar(20),
    description varchar(255),
	  amount float(8,2) NOT NULL,
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
    PRIMARY KEY (lecture_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE salary_payment (
    payment_id int NOT NULL AUTO_INCREMENT,
    payment_type varchar(255),
    amount_pmnt_staff float(8,2) NOT NULL DEFAULT 0.00,
    amount_tmp_staff float(8,2) NOT NULL DEFAULT 0.00,
	  amount_tmpt_staff float(8,2) NOT NULL DEFAULT 0.00,
	  etf_amount float(8,2) NOT NULL DEFAULT 0.00,
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (payment_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE water_bills (
    billno int NOT NULL AUTO_INCREMENT,
    period varchar(255),
    previous_reading int NOT NULL,
    current_reading int NOT NULL,
	  no_of_units int NOT NULL,
	  amount float(8,2) NOT NULL,
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (billNo),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE advance_settle_event (
    receipt_no int NOT NULL AUTO_INCREMENT,
    settlement_no int,
    refund_amount float(8,2),
  	additional_amount float(8,2),
  	total_expense float(8,2) NOT NULL,
  	certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (receipt_no),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE electricity_bills (
    id int NOT NULL AUTO_INCREMENT,
    billno varchar(20) NOT NULL,
    location varchar(20),
    previous_reading int NOT NULL,
    current_reading int NOT NULL,
	  no_of_units int NOT NULL,
	  amount float(8,2) NOT NULL,
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE bursary (
    payment_id int NOT NULL AUTO_INCREMENT,
    month varchar(15),
    amount float(8,2) NOT NULL,
  	description varchar(255),
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (payment_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE mahapola (
    payment_id int NOT NULL AUTO_INCREMENT,
    month varchar(15),
    amount float(8,2) NOT NULL,
	  description varchar(255),
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (payment_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE telephone_bills (
    bill_id int NOT NULL AUTO_INCREMENT,
    month varchar(15),
    category varchar(20),
	  amount float(8,2) NOT NULL,
	  location varchar(20),
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (bill_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE travel_claims (
    claimer_id varchar(20) NOT NULL,
    name varchar(255) NOT NULL,
    designation varchar(20),
    description varchar(255),
  	amount float(8,2) NOT NULL,
  	period int,
  	certification varchar(10),
  	certified_date datetime,
  	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	trainee_staff_id int,
  	user_key int,
  	PRIMARY KEY (claimer_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
  	FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE stock_grn (
    grn_no int NOT NULL,
    description varchar(255),
  	amount float(8,2) NOT NULL,
  	certification varchar(10),
  	certified_date datetime,
  	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	trainee_staff_id int,
  	user_key int,
    PRIMARY KEY (grn_no),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
  	FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE stock_invoice (
	  invoice_no int NOT NULL,
	  order_no int,
	  quantity int,
    amount float(8,2) NOT NULL,
	  payable_to varchar (20),
	  description varchar(20),
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
    PRIMARY KEY (invoice_no),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE home_allowance (
	  emp_id int NOT NULL,
	  emp_name varchar(255),
    designation varchar(20),
	  amount float(8,2) NOT NULL,
	  payable_to varchar (255),
	  qty int,
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
    PRIMARY KEY (emp_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE internet_bills (
    bill_id int NOT NULL AUTO_INCREMENT,
    month varchar(15),
    category varchar(20),
	  amount float(8,2) NOT NULL,
	  duration varchar(20),
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (bill_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE code_book (
    desc_id int NOT NULL AUTO_INCREMENT,
    faculty varchar(30),
    payable_to varchar(20),
	  description varchar(255),
	  code varchar(20),
	  category varchar(20),
	  amount float(8,2) NOT NULL,
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (desc_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
  	FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE advance_pay_event (
    rec_id int NOT NULL AUTO_INCREMENT,
    rec_name varchar(50),
    designation varchar(20),
	  description varchar(255),
	  amount float(8,2) NOT NULL,
	  certification varchar(10),
	  certified_date datetime,
	  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (rec_id),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);

CREATE TABLE house_rent (
    voucher_no int NOT NULL AUTO_INCREMENT,
    period varchar(255),
	  house_name varchar(50),
	  house_ocation varchar(50),
	  amount float(8,2) NOT NULL,
	  net_amount float(8,2) NOT NULL,
	  certification varchar(10),
  	certified_date datetime,
  	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	  trainee_staff_id int,
	  user_key int,
	  PRIMARY KEY (voucher_no),
    FOREIGN KEY (trainee_staff_id) REFERENCES staff(user_key),
	  FOREIGN KEY (user_key) REFERENCES staff(user_key)
);
