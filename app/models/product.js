EF.Product = DS.Model.extend({
    name: DS.attr('string'),
    content: DS.attr('string'),
    intro: DS.attr('string'),
    sortIndex: DS.attr('number'),
    cover: DS.attr('string'),
    largeImg: DS.attr('string')
});