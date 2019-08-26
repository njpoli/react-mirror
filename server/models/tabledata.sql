
/* Delete the tables if they already exist */
drop table if exists UserTable;
drop table if exists Widget;
drop table if exists Compliment;
drop table if exists UserWidgetJoin;

/* Create the schema for our tables */
create table UserTable(userID int, name text);
create table Widget(wID int, name text);
create table UserWidgetJoin(uwID int, userID int, wID int, location text);
create table Compliment(cID int, message text, time text);

/* Populate the tables with our data */
insert into UserTable values(101, 'Nate');
insert into UserTable values(102, 'Krysti');

insert into Widget values(201, 'Clock');
insert into Widget values(202, 'Compliment');
insert into Widget values(203, 'Twitch');
insert into Widget values(204, 'Weather');
insert into Widget values(205, 'News');

insert into UserWidgetJoin values(301, 101, 201, 'region left');
insert into UserWidgetJoin values(302, 101, 202, 'region lower third');
insert into UserWidgetJoin values(303, 101, 203, 'region bar');
insert into UserWidgetJoin values(304, 101, 204, 'region bottom');
insert into UserWidgetJoin values(305, 102, 201, 'region right');
insert into UserWidgetJoin values(306, 102, 202, 'region lower third');
insert into UserWidgetJoin values(307, 102, 204, 'region left');
insert into UserWidgetJoin values(308, 102, 205, 'region bar');

insert into Compliment values(401, 'You look great this morning!', 'Morning');
insert into Compliment values(402, 'You look great this afternoon!', 'Afternoon');
insert into Compliment values(403, 'You look great this evening!', 'Night');
insert into Compliment values(404, 'Hire me!', 'Anytime');
insert into Compliment values(405, 'You look great, even in sweatpants', 'Anytime');
insert into Compliment values(406, 'That color looks great on you!', 'Anytime');