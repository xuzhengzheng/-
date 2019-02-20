clc
ttt=clock;
day2=datenum(ttt(1),ttt(2),ttt(3)) - datenum(1994,11,20);%从今天到出生的天数，出生到现在是第几天
day=day2+365;%相应的在今天的基础上往后加一年
A1=zeros(365,1);%用来记录今天往后一年的数值
x=day2:0.002*pi:day;%%x轴的起点、点的间距，终点
y1=sin((pi/14.5)*x);%%蓝色，智力周期为33
y2=sin((pi/16)*x);%%红色，情绪周期为28
y3=sin((pi/11.5)*x);%%绿色，体力周期为23
%plot(x,y1,'-b',x,y2,'xr',x,y3,'og');
plot(x,y1,'b',x,y2,'r',x,y3,'g');

figure
y1= sin((pi/14)*x)+sin((pi/16)*x)+sin((pi/11.5)*x);
plot(x,y1,'-b');
set(gca,'XTick',[day2:15:day]); 
% nowdate=datestr(now, 'yyyymmddHHMMSS');

 t0=now;
ttt2=clock;
dt=25;
tf=datenum(ttt2(1)+1,ttt2(2),ttt2(3));

T=t0:dt:tf;%%t0为时间初值，tf为时间终值，dt为时间间隔
dv = datevec(T);%%
 C=mat2cell(dv(1:end,1:3),ones(length(T),1),3);
 S=cellfun(@(t){sprintf('%4i%02i%02i',t)},C);
%%输出日子
 x=day2:0.002*pi:day;%%x轴的起点、点的间距，终点
figure
 y1=sin((pi/14)*x)+sin((pi/16)*x)+sin((pi/11.5)*x);
plot(x,y1,'-b');
 set(gca,'XTick',[day2:25:day]); 
set(gca,'XTickLabel',S)
