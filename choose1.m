clc
ttt=clock;
day2=datenum(ttt(1),ttt(2),ttt(3)) - datenum(1994,11,20);%�ӽ��쵽�����������������������ǵڼ���
day=day2+365;%��Ӧ���ڽ���Ļ����������һ��
A1=zeros(365,1);%������¼��������һ�����ֵ
x=day2:0.002*pi:day;%%x�����㡢��ļ�࣬�յ�
y1=sin((pi/14.5)*x);%%��ɫ����������Ϊ33
y2=sin((pi/16)*x);%%��ɫ����������Ϊ28
y3=sin((pi/11.5)*x);%%��ɫ����������Ϊ23
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

T=t0:dt:tf;%%t0Ϊʱ���ֵ��tfΪʱ����ֵ��dtΪʱ����
dv = datevec(T);%%
 C=mat2cell(dv(1:end,1:3),ones(length(T),1),3);
 S=cellfun(@(t){sprintf('%4i%02i%02i',t)},C);
%%�������
 x=day2:0.002*pi:day;%%x�����㡢��ļ�࣬�յ�
figure
 y1=sin((pi/14)*x)+sin((pi/16)*x)+sin((pi/11.5)*x);
plot(x,y1,'-b');
 set(gca,'XTick',[day2:25:day]); 
set(gca,'XTickLabel',S)
