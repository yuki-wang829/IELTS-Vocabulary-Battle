// Learning groups are editorial difficulty tiers, not official IELTS word-to-score mappings.
const groups={
5:[['improve','提高'],['environment','环境'],['benefit','好处；益处'],['increase','增加'],['reduce','减少'],['develop','发展'],['research','研究'],['provide','提供'],['support','支持'],['health','健康'],['education','教育'],['community','社区']],
6:[['adapt','适应；改编'],['assess','评估'],['evidence','证据'],['impact','影响'],['resource','资源'],['significant','重要的；显著的'],['maintain','维持'],['approach','方法；接近'],['indicate','表明'],['require','需要；要求'],['establish','建立'],['consequence','结果；后果']],
7:[['feasible','可行的'],['hypothesis','假设'],['infrastructure','基础设施'],['facilitate','促进；使便利'],['constraint','限制；约束'],['sustainable','可持续的'],['allocate','分配'],['inevitable','不可避免的'],['interpret','解释；解读'],['perspective','观点；视角'],['substantial','大量的；实质性的'],['deteriorate','恶化']],
8:[['intrinsic','内在的；固有的'],['ambiguous','模棱两可的'],['empirical','以观察或实验为依据的'],['ubiquitous','无处不在的'],['alleviate','缓解'],['discrepancy','差异；不一致'],['exacerbate','使恶化'],['scrutinize','仔细审查'],['inadvertent','无意的；非故意的'],['resilience','适应力；恢复力'],['paradigm','范式；典型模式'],['proliferation','迅速增加；扩散']],
9:[['equivocal','含糊的；不明确的'],['inextricable','难以分开的；无法摆脱的'],['ostensibly','表面上；据称'],['idiosyncratic','个人特有的；独特的'],['ephemeral','短暂的'],['counterintuitive','违反直觉的'],['corroborate','证实；提供佐证'],['ameliorate','改善；减轻'],['juxtaposition','并置；并列对比'],['incontrovertible','无可争辩的'],['heterogeneous','由不同种类组成的'],['unequivocal','明确的；毫不含糊的']]
};
export const words=Object.entries(groups).flatMap(([level,items])=>items.map(([word,meaning])=>({word,meaning,level:Number(level)})));
export function shuffle(items,random=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
export function makeRound(pool,mode){return shuffle(pool).slice(0,10).map(item=>({item,choices:shuffle([item,...shuffle(words.filter(w=>w.word!==item.word&&w.meaning!==item.meaning)).slice(0,3)])}))}
export const normalize=text=>text.trim().toLowerCase();
